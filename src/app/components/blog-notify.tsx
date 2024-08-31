'use client';

import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type BlogNotifyProps = {
  text: string;
  created: 'true' | 'false';
};

export default function BlogNotify({ text, created }: BlogNotifyProps) {
  useEffect(() => {
    if (created === 'true') toast.success(text);
    if (created === 'false') {
      toast.error(text);

      setTimeout(() => {
        window.location.href = '/';
      }, 2500);
    }
  }, []);

  return (
    <ToastContainer
      hideProgressBar={true}
      autoClose={2000}
      theme='colored'
      position='top-center'
    />
  );
}
