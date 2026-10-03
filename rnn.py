#парктическая 4

#1

a = float(input("введите коэффициент a: "))
b = float(input("введите коэффициент b: "))
c = float(input("введите коэффициент c: "))

D = b ** 2 - 4 * a * c

if D > 0:
   print("два корня")
elif D == 0:
   print("один корень")
else:
   print("корней нет")

#2

password = input("введите пароль: ")

special_chars = "*$#!"

has_special = False
for char in password:
   if char in special_chars:
      has_special = True
      break

if len(password) >= 8 and has_special:
   print("пароль надежный")
else:
   print("пароль ненадежный")


#3

year = int(input("введите год: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
   print("год високосный")
else:
   print("год не високосный")

#4
def check_discount(age: int, day: str) -> str:

    day_lower = day.lower()
    
    is_social_day = day_lower in ["суббота", "воскресенье"]
    
    is_eligible_for_discount = age < 14 or age > 65
    
    if is_eligible_for_discount and not is_social_day:
        return "Скидка доступна"
    else:
        return "Скидка недоступна"

if __name__ == "__main__":
    try:
        age_input = int(input("Введите возраст посетителя: "))
        day_input = input("Введите день недели: ")
        
        result = check_discount(age_input, day_input)
        print(result)
    except ValueError:
        print("Ошибка: возраст должен быть целым числом.")


#5

def get_quadrant(x: float, y: float) -> str:
    if x == 0 or y == 0:
        return "Точка лежит на оси"
    
    elif x > 0 and y > 0:
        return "I четверть"
    
    elif x < 0 and y > 0:
        return "II четверть"
    
    elif x < 0 and y < 0:
        return "III четверть"
    
    else:
        return "IV четверть"

if __name__ == "__main__":
    try:
        x_input = float(input("Введите координату x: "))
        y_input = float(input("Введите координату y: "))
        
        result = get_quadrant(x_input, y_input)
        print(result)
    except ValueError:
        print("Ошибка: координаты должны быть числами.")