// helper function

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
