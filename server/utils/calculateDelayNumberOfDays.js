export const calculateDelayNumberOfDays = (issuedTill) => {
    const issuedTillDate = new Date(issuedTill);
  
    const timeDifference = issuedTillDate.getTime() - Date.now();
  
    const daysDifference = Math.abs(Math.round(timeDifference / (1000 * 3600 * 24)));
  
    return daysDifference;
}
  
