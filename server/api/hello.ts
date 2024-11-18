import jobs from '../jobs.json';
    
export default defineEventHandler(async (event) => {
    return new Promise<any>((resolve) => {
       setTimeout(() => {
        resolve(jobs);
       }, 2000);
      
    });
  })