'use client';

import { webDevServiceData } from '@/app/data/webDevService';
import ServicePage from '@/components/web/services';
import React from 'react';

export default function WebPage() {
  return (
    <div>
      <ServicePage service={webDevServiceData}/>
    </div>
  );
}