#! /user/bin/env node
import inquirer from "inquirer";
 class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
    class person{
        student:Student[]=[]

        addstudent(obj:Student){
            this.student.push(obj)
        }
    }
    const persons =new person()
    

    const programstart =async(persons:person)=>{

    do{
        console.log("Welcome guest")

        const ans = await inquirer.prompt({
            type:"list",
            message:"who do you want to talk to?",
            name:"select",
            choices: ["self","student"]
        })
        if (ans.select=="self"){
            console.log("im talking to my self")
            console.log("i'm feeling well")

        }
        if(ans.select=="student"){
          const ans = await inquirer.prompt({
            type:"input",
            message:"whom do you want to talk to?",
            name:"student",
          }); 
          
          const student = persons.student.find(val=>val.name==ans.student)
          if(!student){
            const name=new Student(ans.student)
            persons.addstudent(name)
            console.log(`hello im ${name.name}, and im fine `);
            console.log(persons.student);
          }
          if(student){
            console.log(`hello im ${student.name}, and im fine.................. `)
            console.log(persons.student);

          }


        }


 }while(true)
 }
 programstart(persons);