const {fs}=require('fs')
class JasonReader {
    public data: any;

    getData() {
        this.data=fs.readFile('../Data/Config.json','utf8',(err,jsonString)=>{
            if(err){
               console.log("Error Reading data from file ../Data/Config.json")
                return
            }else {
                return JSON.parse(jsonString);
            }
        })
    }


}