import { UserInputFormHandler } from './UserInputForm';
import { AIContentGenerationEngineHandler } from './AIContentGenerationEngine';
import { TemplateLibraryHandler } from './TemplateLibrary';
import { DesignAndFormattingHandler } from './DesignAndFormatting';
import { IterativeFeedbackSystemHandler } from './IterativeFeedbackSystem';
import { ExportFunctionalityHandler } from './ExportFunctionality';
import { ExportBackendHandlerHandler } from './ExportBackendHandler';
import { JobPlatformIntegrationHandler } from './JobPlatformIntegration';
import { UserAuthenticationHandler } from './UserAuthentication';
import { MainNavigationHandler } from './MainNavigation';
import { UserDashboardHandler } from './UserDashboard';


export async function onRequest({ request }) {
  const url = new URL(request.url);
  const pathname = url.pathname;


if (pathname === '/api/UserInputForm') return UserInputFormHandler(request);


  if (pathname === '/api/AIContentGenerationEngine') return AIContentGenerationEngineHandler(request);


  if (pathname === '/api/TemplateLibrary') return TemplateLibraryHandler(request);


  if (pathname === '/api/DesignAndFormatting') return DesignAndFormattingHandler(request);


  if (pathname === '/api/IterativeFeedbackSystem') return IterativeFeedbackSystemHandler(request);


  if (pathname === '/api/ExportFunctionality') return ExportFunctionalityHandler(request);


  if (pathname === '/api/ExportBackendHandler') return ExportBackendHandlerHandler(request);


  if (pathname === '/api/JobPlatformIntegration') return JobPlatformIntegrationHandler(request);


  if (pathname === '/api/UserAuthentication') return UserAuthenticationHandler(request);


  if (pathname === '/api/MainNavigation') return MainNavigationHandler(request);


  if (pathname === '/api/UserDashboard') return UserDashboardHandler(request);


  return new Response("Not found", { status: 404 });
}