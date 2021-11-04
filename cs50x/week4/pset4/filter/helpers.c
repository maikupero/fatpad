#include "helpers.h"
#include <stdio.h>
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
// Average the rgb values and apply to each RGB, for each pixel.
    float avg;
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            avg = lround((image[i][j].rgbtBlue + image[i][j].rgbtGreen + image[i][j].rgbtRed) / 3.0);
            image[i][j].rgbtBlue = avg;
            image[i][j].rgbtGreen = avg;
            image[i][j].rgbtRed = avg;
        }
    }
    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    // Introduce a placeholder for swapping pixels.
    // Only iterate to half the width, swapping left and right sides' pixels.
    RGBTRIPLE temp;
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < (width / 2); j++)
        {
            temp = image[i][j];
            image[i][j] = image[i][width - (j + 1)];
            image[i][width - (j + 1)] = temp;
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    // Create placeholder image so that we iterate over only original pixels.
    RGBTRIPLE blurred[height][width];
    int surrounding;
    float avgB;
    float avgG;
    float avgR;

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            // For each pixel, set rgb and surrounding elements counter to 0.
            avgB = 0.0;
            avgG = 0.0;
            avgR = 0.0;
            surrounding = 0;
            // Iterate over the 3x3 grid around our target pixel
            for (int k = i - 1; k < i + 2; k++)
            {
                for (int l = j - 1; l < j + 2; l++)
                {
                    //Ignore pixels off the edge of the picture
                    if ((k > -1 && k < height) && (l > -1 && l < width))
                    {
                        avgB += image[k][l].rgbtBlue;
                        avgG += image[k][l].rgbtGreen;
                        avgR += image[k][l].rgbtRed;
                        surrounding += 1;
                    }
                }
            }

            blurred[i][j].rgbtBlue = round(avgB / surrounding);
            blurred[i][j].rgbtGreen = round(avgG / surrounding);
            blurred[i][j].rgbtRed = round(avgR / surrounding);
        }
    }
    // Transfer the blurred image's pixels to our output
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j] = blurred[i][j];
        }
    }
    return;
}

// Detect edges
void edges(int height, int width, RGBTRIPLE image[height][width])
{
    // Create placeholder image so that we iterate over only original pixels.
    RGBTRIPLE edged[height][width];
    //BGR values + the 3x3 kernerls we will compare them too
    float avgBx;
    float avgGx;
    float avgRx;
    float avgBy;
    float avgGy;
    float avgRy;
    int Gx;
    int Gy;
    int arrx[3][3] =
    {
        {-1, 0, 1},
        {-2, 0, 2},
        {-1, 0, 1}
    };
    int arry[3][3] =
    {
        {-1, -2, -1},
        {0, 0, 0},
        {1, 2, 1}
    };

    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            // For each pixel, set rgb and surrounding elements counter to 0.
            avgBx = 0.0;
            avgGx = 0.0;
            avgRx = 0.0;
            avgBy = 0.0;
            avgGy = 0.0;
            avgRy = 0.0;
            // Iterate over the 3x3 grid around our target pixel
            for (int k = i - 1; k < i + 2; k++)
            {
                for (int l = j - 1; l < j + 2; l++)
                {
                    //Ignore pixels off the edge of the picture
                    if ((k > -1 && k < height) && (l > -1 && l < width))
                    {
                        avgBx += image[k][l].rgbtBlue * arrx[1 - (i - k)][1 - (j - l)];
                        avgGx += image[k][l].rgbtGreen * arrx[1 - (i - k)][1 - (j - l)];
                        avgRx += image[k][l].rgbtRed * arrx[1 - (i - k)][1 - (j - l)];
                        avgBy += image[k][l].rgbtBlue * arry[1 - (i - k)][1 - (j - l)];
                        avgGy += image[k][l].rgbtGreen * arry[1 - (i - k)][1 - (j - l)];
                        avgRy += image[k][l].rgbtRed * arry[1 - (i - k)][1 - (j - l)];
                    }
                }
            }
            // Sobel Filter Algorithm to get the rgb values for each new pixel.
            edged[i][j].rgbtBlue = sqrt(pow(avgBx, 2) + pow(avgBy, 2)) > 255 ? 255 : round(sqrt(pow(avgBx, 2) + pow(avgBy, 2)));
            edged[i][j].rgbtGreen = sqrt(pow(avgGx, 2) + pow(avgGy, 2)) > 255 ? 255 : round(sqrt(pow(avgGx, 2) + pow(avgGy, 2)));
            edged[i][j].rgbtRed = sqrt(pow(avgRx, 2) + pow(avgRy, 2)) > 255 ? 255 : round(sqrt(pow(avgRx, 2) + pow(avgRy, 2)));
        }
    }
    // Transfer the egded image's pixels to our output
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j] = edged[i][j];
        }
    }
    return;
}
