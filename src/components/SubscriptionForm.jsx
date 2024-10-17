'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(3, {message: "Username must be more than three characters"}).max(50, {message: "Username must not be more than fifty characters"}),
  email: z.string().email({message: 'Please enter a valid email'})
})


export default function SubscriptionForm() {

    const { toast } = useToast()
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('')

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username,
          email,
        },
      })

      // 2. Define a submit handler.
 // Submit handler that shows toast with form values
 function onSubmit(values) {
    console.log(values)
    toast({
        title: "User Saved Successfully",
        description: `Username: ${values.username},
         Email: ${values.email}`,
         action: <ToastAction altText="Try again">Exit</ToastAction>,
    })
    /** Reset the fields after a successful entry */
    form.reset()
}


  const { isSubmitting, isValid } = form.formState

  return (
    <div className='container border rounded-md p-4 w-1/4'>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-8 flex flex-col py-2 ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Username</FormLabel>
              <FormControl>
                <Input 
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                type='text'
                disabled={isSubmitting}
                placeholder="Please enter Username" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Email</FormLabel>
              <FormControl>
                <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                disabled={isSubmitting}
                placeholder="Please enter Email" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display email.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
        disabled={!isValid || isSubmitting}
        type="submit">
            Submit
        </Button>
      </form>
    </Form>
    </div>
  )
}
