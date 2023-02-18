const keys = document.querySelector("body")


keys.addEventListener("click",event=>{
    
    let value = event.target.value
    let target = event.target
    
    if(!target.matches("button")){
        //so that  it doesnt return undefined
        
        return
    }else{
        //p
        calculator.parseInput(value)

    }

})


//create a calculator object

const calculator ={
    displayText:"0",
    prevTotal: null,
    parseInput(value){
        

        switch(value){
            
            case"=":
            //calculate the ans
                break;
            case"AC":
            //clear screen and stored value
                this.clearAll()
                break;
            case".":
            if(this.displayText==0){
                //have to pass 0. to the next string
                this.addText("0.")
            }else{
                this.addText(value)
            }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
    
        }

    },

    addText(value){

        if(this.displayText ==="0"){
            this.displayText =''
        }else if(this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        //check to see if 2 operators are side by side 

        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }

        this.displayText += value 
        this.outputText(this.displayText)

    },

    outputText(text){
        document.querySelector(".calc-screen").value = text
    },

    calcAnswer(equation){
        let result = Function("return" + equation)()
        this.outputText(result)
    },

    clearAll(){
        this.displayText = "0"
        this.prevTotal = null
        this.outputAll(this.displayText)

    },

   



}