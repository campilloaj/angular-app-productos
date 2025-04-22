import { messages } from '../config/messages';

type MessageKey = keyof typeof messages;

type ArrayValidator = {
  value: any;
  key: MessageKey  
}


export const validator = (arrayObject:ArrayValidator[]) => {
   let tempArray:MessageKey[] = [];

   arrayObject.forEach(x => {
      if(x.value.trim() === '' || x.value === null || x.value === undefined){
         tempArray.push(x.key)
      }
   });

  return { hasError: tempArray.length > 0, listMessage: tempArray };
}