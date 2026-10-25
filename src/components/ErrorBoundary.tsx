import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error(
        `[ErrorBoundary${this.props.name ? `:${this.props.name}` : ''}] Caught error:`,
        error,
        errorInfo
      );
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-[#FFFFFF] px-4 font-sans text-center">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#0a0a0f] border border-[rgba(0,229,255,0.2)] shadow-2xl space-y-5">
            <div className="w-12 h-12 mx-auto rounded-full bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.3)] flex items-center justify-center text-[#00E5FF]">
              <span className="font-mono font-bold text-lg">!</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tight text-white">Something went wrong</h2>
              <p className="text-sm text-slate-400">
                An unexpected error occurred while loading this section.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={this.handleReload}
                className="px-5 py-2.5 rounded-lg bg-[#00E5FF] hover:bg-[#33EEFF] text-[#050505] font-mono text-xs font-semibold transition-colors"
              >
                Reload Page
              </button>
              <a
                href="https://github.com/NaniToka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[rgba(59,10,107,0.6)] hover:bg-[rgba(59,10,107,0.8)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF] font-mono text-xs font-semibold transition-colors inline-flex items-center justify-center"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
