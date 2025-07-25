import { User } from "../users/user.entity";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const authRepository = {
  async signup(name: string, email: string, password: string): Promise<{user: User, token: string}> {
    const result = await fetch(`${VITE_API_URL}/auth/signup`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ name, email, password })
    }
  );
    const { user, token } = await result.json();
    return { user: new User(user), token };
  }
}