// import { getJsonSchemaRef, post, requestBody } from '@loopback/rest';
import { getJsonSchemaRef, post, requestBody } from '@loopback/rest';


export const CredentialsSchema={
  type:'object',
  required:['email','password'],
  properties:{
    email:{
      type:'string',
      format:'email',
    },
    password:{
      type:'string',
      minLength: 8,
    },
  },
};

export const CredentialsRequestBody={
  description:'The input of login function',
  required:true,
  content:{
    'application/json':{schema: CredentialsSchema},
  },
};


