import { SlideFade } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStep } from '@/features/auth/forgot-password/model/selectors/getStep/getStep.selector';
import { forgotPasswordAction } from '@/features/auth/forgot-password/model/slice/forgotPassword.slice';
import { CheckEmailForm } from '@/features/auth/forgot-password/ui/CheckEmail/CheckEmailForm';
import { Complete } from '@/features/auth/forgot-password/ui/Complete/Complete';
import { SendEmailForm } from '@/features/auth/forgot-password/ui/SendEmail/SendEmailForm';
import { SetPasswordForm } from '@/features/auth/forgot-password/ui/SetPassword/SetPasswordForm';

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const step = useSelector(getStep);

  useEffect(() => {
    return () => {
      dispatch(forgotPasswordAction.setStep(0));
    };
  }, [dispatch]);

  return (
    <>
      {step === 0 && (
        <SlideFade in offsetY={10}>
          <SendEmailForm />
        </SlideFade>
      )}
      {step === 1 && (
        <SlideFade in offsetY={10} delay={0.1}>
          <CheckEmailForm />
        </SlideFade>
      )}
      {step === 2 && (
        <SlideFade in offsetY={10} delay={0.1}>
          <SetPasswordForm />
        </SlideFade>
      )}
      {step === 3 && (
        <SlideFade in offsetY={10} delay={0.1}>
          <Complete />
        </SlideFade>
      )}
    </>
  );
};
