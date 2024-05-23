import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  autho0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };

  //double check below and go over mutate topic again?
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  //returning mutateAsync function and loading, error, and success states
  return { createUser, isLoading, isError, isSuccess };
};
