// import AdminPanel from '@/app/components/admin/AdminPanel';
import { getCategories } from '@/app/firebase/databaseQueries';
import React from 'react';

export default async function AdminPage() {
  const categories = getCategories();
  return <div>AdminPage</div>;
  //   return <AdminPanel />;
}
