export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Bot trap: must be empty
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  // Honeypot check - if filled, it's a bot
  if (data.honeypot && data.honeypot.trim() !== '') {
    errors.honeypot = 'Automated submission detected.';
    return { isValid: false, errors };
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  } else if (data.name.trim().length > 60) {
    errors.name = 'Name cannot exceed 60 characters.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Subject should be at least 3 characters.';
  } else if (data.subject.trim().length > 100) {
    errors.subject = 'Subject cannot exceed 100 characters.';
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please write a message with at least 10 characters.';
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Message cannot exceed 2000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
