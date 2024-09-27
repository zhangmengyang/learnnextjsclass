import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();
//
// async function seedUsers() {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;
//
//     const insertedUsers = await Promise.all(
//         users.map(async (user) => {
//           const hashedPassword = await bcrypt.hash(user.password, 10);
//           return client.sql`
//           INSERT INTO users (id, name, email, password)
//           VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//           ON CONFLICT (id) DO NOTHING;
//         `;
//         }),
//     );
//
//     return insertedUsers;
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }
//
// async function seedInvoices() {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS invoices (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         customer_id UUID NOT NULL,
//         amount INT NOT NULL,
//         status VARCHAR(255) NOT NULL,
//         date DATE NOT NULL
//       );
//     `;
//
//     const insertedInvoices = await Promise.all(
//         invoices.map(
//             (invoice) => client.sql`
//           INSERT INTO invoices (customer_id, amount, status, date)
//           VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//           ON CONFLICT (id) DO NOTHING;
//         `,
//         ),
//     );
//
//     return insertedInvoices;
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }
//
// async function seedCustomers() {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
//
//     const insertedCustomers = await Promise.all(
//         customers.map(
//             (customer) => client.sql`
//           INSERT INTO customers (id, name, email, image_url)
//           VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//           ON CONFLICT (id) DO NOTHING;
//         `,
//         ),
//     );
//
//     return insertedCustomers;
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }
//
// async function seedRevenue() {
//   try {
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;
//
//     const insertedRevenue = await Promise.all(
//         revenue.map(
//             (rev) => client.sql`
//           INSERT INTO revenue (month, revenue)
//           VALUES (${rev.month}, ${rev.revenue})
//           ON CONFLICT (month) DO NOTHING;
//         `,
//         ),
//     );
//
//     return insertedRevenue;
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

export async function GET() {
  try {
    const result = await client.sql`SELECT 1`;
    console.log('Database connection successful:', result);
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }

  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedCustomers();
  //   await seedInvoices();
  //   await seedRevenue();
  //   await client.sql`COMMIT`;
  //
  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   console.error('Error in seed route:', error);
  //   return Response.json({ error: 'Internal server error' }, { status: 500 });
  // }
}
