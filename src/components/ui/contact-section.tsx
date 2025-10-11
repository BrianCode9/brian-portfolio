import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className='bg-white p-20 flex justify-center'>
      <div className='flex flex-col gap-10 text-black'>
        <div className='text-5xl'>Want to React Out?</div>
        <div className='flex flex-row gap-10'>
          <div className='border-2 p-10 w-150 gap-5'>
            <div className='grid grid-cols-2 gap-5 h-10'>
              <div className='flex border p-1 items-center'>Name</div>
              <Input className='col-span-1' placeholder='Name' />
            </div>
            <div className='flex border p-1 h-50 mt-5'>Messasge</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
