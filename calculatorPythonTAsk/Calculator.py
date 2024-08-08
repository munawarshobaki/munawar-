class Calculator:
    x=0
    y=0
    def __init__(self,x,y):
        self.x=x
        self.y=y
    def add(self):
        return self.x + self.y
    def subtract(self):
        return self.x-self.y
    def multiple(self):
        return self.x*self.y
    def divide(self):
        return self.x / self.y