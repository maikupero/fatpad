class Student:
    def __init__(self, id, name, totalAverage=0, courses=[]):
        self.id = id
        self.name = name
        self.totalAverage = totalAverage
        self.courses = courses

    def __str__(self):
        return f"{self.id}, {self.name}"