import {useState} from "react";
/*This promise simulates the waiting time for a server response when the submit function is triggered*/
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*Custom hook that can be used to submit a form and simulate an API call using Math.random() to simulate a random success or failure with equal chance of success and failure*/
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, I will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;

