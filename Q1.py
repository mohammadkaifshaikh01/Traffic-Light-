def sum(value):
   
    total = value

    def add_value(next_value=None):
        nonlocal total 
        
        if next_value is None:  
            return total
        else: 
            total += next_value
            return add_value
    
    return add_value  


print(sum(1)(2)(3)(4)(5)()) 
print(sum(3)(7)())          

