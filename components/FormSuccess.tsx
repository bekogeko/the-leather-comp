import { CheckCircledIcon } from '@radix-ui/react-icons';
import exp from 'constants';

interface FormErrorProps {
  // error: string;
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className='flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500'>
      <CheckCircledIcon />
      <p>{message}</p>
    </div>
  );
};
