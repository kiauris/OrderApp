export const formatDate = (date) => {
    const value = new Date(date);
    
    const year = value.getFullYear();
    const month = (value.getMonth() + 1).toString().padStart(2, '0');
    const day = (value.getDate() + 1).toString().padStart(2, '0');
    const hour = value.getHours().toString().padStart(2, '0');
    const minute = value.getMinutes().toString().padStart(2, '0');
    
    return `${year}-${month}-${day} ${hour}:${minute}`;
}