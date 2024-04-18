export const analyze = (text) => {
    if (text.includes("issue with payment"))
    {
        return ("What kind of issues your are facing");
    } 
     else if (text.includes("payment done but order not finalized")) 
    {
        return ("Can you provide your transaction id ?");
    }  
    else if(text.includes("tx1234567890"))
    {
        return("No worries,will check and deliver your order,Any other help?");
    }
        
    
  };
  