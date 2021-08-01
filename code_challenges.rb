# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#PROCESS:
    #create a method - letter_select
    #parameters - array, letter
    #set a new empty array - newArray
    #use .each method and pass in a value
    #if value include? given letter, print value
    #inputs & outputs - ['coffee', 'tea', 'juice', 'water', 'soda water'] , 'o' --> ['coffee', 'soda water'] , 't' ---> ['tea', 'water', 'soda water']
=begin
def letter_select (array, letter)
    newArray = []
    array.each do |value|
        if value.include? letter
           p newArray << value
        end
    end
end
letter_select  beverages_array, letter_o
letter_select  beverages_array, letter_t
#I see that the terminal is logging each string first before adding the next one in the array, I couldn't figure out how to fix that 🤔
=end
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#PROCESS:
    #create a method - vowel_remove
    #parameters - string
    #declare a variable named vowels that hold the vowels
    #use .chars to access each character in the string and each character in the vowels
    #take away the characters in vowels from the characters in the string
    #.join to join the characters into a string
    #inputs & outputs - album1 --> 'Rbbr Sl' , album2 --> 'Sgt Pppr' , album3 --> 'Abbey Road'
=begin
def vowel_remove string
    vowels = "AaEeIiOoUu"
    puts (string.chars - vowels.chars).join
end
vowel_remove album1
vowel_remove album2
vowel_remove album3
=end
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#PROCESS:
    #create a class named Bike
    #create a setter- initialize method with model, wheels, and current_speed 
    #set wheels to default 2, and start current_speed at 0
    #create a getter- get_info method, use string interpolation to get info
    #expected output: 'The Trek bike has 2 wheels and is going 0 mph.'

=begin
class Bike
    def initialize model, wheels, current_speed
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end 

bike = Bike.new "Trek", @wheels , @current_speed
p bike.get_info
=end


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

class Bike
    def initialize model, wheels, current_speed
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster
        @current_speed += 10
    end
    def brake
        @current_speed -= 5 
    end
end 

bike = Bike.new "Trek", @wheels , @current_speed
#p bike.get_info
my_bike = Bike.new "FIT", @wheels, @current_speed
p my_bike.pedal_faster
p my_bike.brake
p my_bike.brake
p my_bike.brake


