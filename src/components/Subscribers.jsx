import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Subscribers() {
  return (
    <div className='container p-4 w-1/2'>
        <Card>
            <CardHeader>
                <CardTitle>User</CardTitle>
                <CardDescription>Welldone, you have successfully signed in</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </div>
  )
}
