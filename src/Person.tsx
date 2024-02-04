import React, { useState } from 'react'

interface Props {
    name : string;
    email : string;
    //for properties that are not required neccessirly we use this declaration
    age : number;
    isMarried? : boolean;
    courses : string[];
    //for properties that we want to be given limit amount of data we use 'enum'
    country? : Country;
}

export enum Country {
    Iran = 'Iran',
    Afghanistan = 'Afghanistan',
    Turkmenistan = 'Turkmenistan'
}

//assigning the type pf state in typescript
const [name , setName] = useState<string>('john')


const Person = (props : Props) => {
    const name : string = 'sarvin'


    //How to assign types to functions in typescript
    // It is better that we declare the return value too
    const getAge = (name : string) : number => {
        return 43
    }
    const age : number = getAge('sarvin')

  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h3>Married : {props.isMarried ? 'yes' : 'no'}</h3>
      {props.courses.map((course : string)=> <h4 key={course}>{course}</h4>)}
      <h4>{props.country}</h4>
    </div>
  )
}

export default Person
