import axios from "axios";

const API_BASE_URL = `https://us-central1-gupy-job-vacancies-386503.cloudfunctions.net/gupy-req`;

const getVacancies = async (jobName, limit) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}?role=${jobName}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getVacancies };
