
import { Html, Head, Body, Container, Heading, Text, Link } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function Email({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif', lineHeight: 1.5 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #eaeaea', borderRadius: '5px' }}>
          <Heading style={{ fontSize: '24px', marginBottom: '20px' }}>New Contact Form Submission</Heading>
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link></Text>
          <Text><strong>Message:</strong></Text>
          <Text style={{ whiteSpace: 'pre-wrap' }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
