import { Button } from '@shared/button';

export const LoginPage = () => {
  return (
    <div>
      <Button variant="primary" color="blue">
        Primary Blue
      </Button>
      <Button variant="secondary" color="red">
        Secondary Red
      </Button>
      <Button variant="outline" color="green">
        Outline Green
      </Button>
      <Button variant="primary" color="gray" disabled>
        Disabled
      </Button>
    </div>
  );
};
