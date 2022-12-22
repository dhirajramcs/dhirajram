const square = function(x) {
    return x * x;
    };
    

    const makeNoise = function() {
        console.log("Pling!");
        };
        

    const power = function(base, exponent) {
        let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
        }
        return result;
        };                  //console.log(power(2, 6));
        
                
        function greet(who) {           //Greeting functions
            console.log("Hello " + who);
            }
            //greet("PersonaName");

            function chicken() {
                return egg();
                }
                function egg() {
                return chicken();
                }


            console.log("my name is ram");
            