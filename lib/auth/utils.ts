import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { type Cookie } from 'lucia';
import { validateRequest } from './lucia';
import { UsernameAndPassword, authenticationSchema } from '../db/schema/auth';

export type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      email?: string;
      username?: string;
    };
  } | null;
};

export const getUserAuth = async (): Promise<AuthSession> => {
  const { session, user } = await validateRequest();
  if (!session) return { session: null };
  return {
    session: {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    },
  };
};

export const checkAuth = async () => {
  const { session } = await validateRequest();
  if (!session) redirect('/sign-in');
};

export const genericError = { error: 'Error, please try again.' };

export const setAuthCookie = (cookie: Cookie) => {
  cookies().set(cookie);
};

const getErrorMessage = (errors: any): string => {
  if (errors.email) return 'Invalid email';
  if (errors.password) return 'Invalid password - ' + errors.password[0];
  return '';
};

export const validateAuthFormData = (
  formData: FormData
):
  | { data: UsernameAndPassword; error: null }
  | { data: null; error: string } => {
  const email = formData.get('email');
  const password = formData.get('password');
  const result = authenticationSchema.safeParse({ email, password });

  if (!result.success) {
    return {
      data: null,
      error: getErrorMessage(result.error.flatten().fieldErrors),
    };
  }
  return { data: result.data, error: null };
};
