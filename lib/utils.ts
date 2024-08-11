// helper function

import { User } from "@clerk/nextjs/server";

async function handleUniqueConstraintViolation(fn: Function) {
    try {
      await fn();
    } catch (e) {
      const error = e as any;
      if (error.code === 'P2002') {
        console.error('Unique constraint violation:', error.meta);
        return new Response('Unique constraint violation', { status: 409 });
      }
      throw error;
    }
  }


  async function handleRecordNotFound(fn: Function) {
    try {
      await fn();
    } catch (e) {
      const error = e as any; // Add type assertion
      if (error.code === 'P2025') {
        console.error('Record not found:', error.meta);
        return new Response('Record not found', { status: 404 });
      }
      throw error;
    }
  }


  export const formattedDate = (user:User) =>{
    const createdAt = new Date(user.createdAt)
    const formatDate = createdAt.toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return formatDate
  }
