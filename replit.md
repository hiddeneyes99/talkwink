# Talkwink Video Chat Platform

## Overview

Talkwink is a full-stack video chat platform that connects users with video chat companions. The application features user authentication, profile browsing, subscription plans, and payment integration. Built with a modern tech stack using React frontend, Express backend, and PostgreSQL database with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

This is a monorepo full-stack application with clear separation between client, server, and shared code:

- **Frontend**: React SPA with TypeScript using Wouter for routing
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui components with Tailwind CSS for styling
- **Build Tool**: Vite for frontend bundling and development

## Key Components

### Frontend Architecture
- **Component Structure**: Modern React with functional components and hooks
- **State Management**: React Context API for authentication state
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations and responsive design
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Authentication**: File-based authentication system (currently mock implementation)
- **Session Management**: Planned integration with connect-pg-simple for PostgreSQL sessions
- **Storage Layer**: Abstracted storage interface for CRUD operations

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Definition**: Located in `shared/schema.ts` using Drizzle schema definitions
- **Type Safety**: Automatic TypeScript type generation from schema

## Data Flow

1. **Authentication Flow**:
   - User signs up/logs in through frontend forms
   - Credentials validated against storage layer
   - Authentication state managed via React Context
   - Protected routes redirect unauthenticated users

2. **Profile Browsing**:
   - Mock data currently used for girl profiles
   - Plans and pricing displayed per profile
   - Real-time online status indicators

3. **Payment Processing**:
   - Payment gateway integration placeholder
   - Plan selection and checkout flow
   - Secure payment handling (to be implemented)

## External Dependencies

### Frontend Dependencies
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tanstack Query**: Data fetching and caching library (ready for API integration)
- **Date-fns**: Date manipulation utility
- **Lucide React**: Icon library
- **Class Variance Authority**: Utility for conditional CSS classes

### Backend Dependencies
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle Kit**: Database migration and schema management tools
- **ESBuild**: Fast JavaScript bundler for production builds

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the entire application
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## Deployment Strategy

### Development Environment
- Vite development server for hot module replacement
- Express server with TypeScript compilation via tsx
- Database migrations via Drizzle Kit
- Replit-specific development tools and error overlays

### Production Build
- Frontend built with Vite and output to `dist/public`
- Backend bundled with ESBuild for Node.js deployment
- Single production server serving both API and static files
- Environment-based configuration for database connections

### Database Management
- Drizzle migrations stored in `./migrations` directory
- Schema changes managed through `db:push` command
- Connection configured via `DATABASE_URL` environment variable

### Key Architectural Decisions

1. **Monorepo Structure**: Chose to keep frontend, backend, and shared code in single repository for easier development and deployment
2. **Drizzle ORM**: Selected for type-safe database operations and excellent TypeScript integration
3. **Express + Vite**: Combined for unified development experience while maintaining separate concerns
4. **File-based Auth**: Currently using simple mock authentication, ready for upgrade to proper session management
5. **Component Library**: shadcn/ui chosen for consistent, accessible, and customizable UI components
6. **Shared Types**: TypeScript types shared between frontend and backend for consistency

The application is designed to be easily extensible with real authentication, payment processing, and video call functionality while maintaining clean separation of concerns and type safety throughout the stack.