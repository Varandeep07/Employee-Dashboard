
const data = async () => {
    const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    // console.log(res.data);
    return res.data;
}

export default data();

// Note - The duration between two successive api calls is quite large, so it provides status
// 429 (Too many requests) if called in quick succession
