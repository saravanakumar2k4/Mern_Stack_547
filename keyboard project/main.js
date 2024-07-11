
        var conditon=false;

        var disp = document.getElementById("display")

        var temp = 0
        function app1(value) {
            if (value == "upper") {
                if (temp == 0) {
                    return temp = 1
                }
                else {
                    return temp = 0
                }
            }
            if (temp == 0) {
                disp.value += value
            }
            else {
                
                disp.value += value.toLowerCase()
            }
        }

        function del() {
            equation = disp.value
            equation = equation.slice(0, equation.length - 1)
            disp.value = equation
        }


        function caps(){
            a=document.getElementsByClassName("a")

            if (conditon==true){
                for(i=0; i<a.length; i++){
                    a[i].textContent=a[i].textContent.toUpperCase()
                }
                conditon=false
                app1("upper")
            }
            else{
                for(i=0; i<a.length; i++){
                    a[i].textContent=a[i].textContent.toLowerCase()
                }
                conditon=true
                app1("upper")
            }
        }

        
