import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className='bg-white p-20 flex justify-center'>
      <div className='flex flex-col gap-10 text-black'>
        <div className='text-5xl underline decoration-orange-highlight'>Want to React Out?</div>
        <div className='flex flex-row gap-10 bg-suit-teal text-white rounded-lg'>
          <div className='p-10 w-150 gap-5 text-white'>
            <div className='grid grid-cols-2 gap-5 h-10'>
              <Input className='col-span-1' placeholder='Name' />
              <Input className='col-span-1' placeholder='Email' />
            </div>
            <textarea
              className="col-span-1 min-h-16 max-h-64 w-full border rounded-md p-2 align-top"
              placeholder="Message"
            />
            <Button className='bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 mt-2'>Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
