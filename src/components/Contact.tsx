import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { fadeUp } from '@/lib/animations';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SectionHeader from './SectionHeader';

// REPLACE THESE WITH YOUR ACTUAL KEYS
const SERVICE_ID = 'service_087kl1h';
const TEMPLATE_ID = 'template_up2l64i';
const PUBLIC_KEY = 'gDC8nXW2LlPko0yt_';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string; // 1. Added type
  message: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '', // 2. Added default value
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          subject: values.subject, // 3. Send subject to EmailJS
          message: values.message,
        },
        PUBLIC_KEY,
      );

      alert('Message sent successfully!');
      form.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title={`Let's make something awesome together`}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full mx-auto space-y-4 mt-10'
        >
          {/* Top Grid: Name, Company, Email, Phone */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Your name'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Company name'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='you@example.com'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='+1234567890'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* 4. Subject Field (Full Width) */}
          <FormField
            control={form.control}
            name='subject'
            rules={{ required: 'Subject is required' }}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    placeholder='Subject'
                    className='border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name='message'
            rules={{ required: 'Message is required' }}
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='Write your message ...'
                    className='h-36 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            size='lg'
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Form>
    </motion.section>
  );
}
