import jobs from '../jobs.json';
let jobsCount = 0;
setTimeout(() => {
    jobsCount++;
}, 1000);
    
export default defineEventHandler(async (event) => {
    return {
        jobsCount: jobsCount
    }
  })