import speech_recognition

recognizer = speech_recognition.Recognizer()
with speech_recognition.Microphone() as source:
    print("Say something: ")
    audio = recognizer.listen(source)

words = recognizer.recognize_google(audio)

if "hello" in words:
    print("Hello to you too!")
elif "how are you" in words:
    print("I'm good, thanks!")
elif "goodbye" in words:
    print("See you later.")
else:
    print("Huh?")


    # Could make this even more powerful with speech recognition.
# words = input("Say something ").lower()

# if "hello" in words:
#     print("Hello to you too!")
# elif "how are you" in words:
#     print("I'm good, thanks!")
# elif "goodbye" in words:
#     print("See you later.")
# else:
#     print("Huh?")
