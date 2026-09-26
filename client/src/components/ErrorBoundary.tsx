import { AlertTriangle } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error("SF Cyber: falha na aplicação", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-slate-950 text-slate-100">
          <div className="flex flex-col items-center w-full max-w-md p-8 text-center">
            <AlertTriangle size={48} className="text-red-500 mb-6 flex-shrink-0" />

            <h2 className="text-xl mb-4">Algo deu errado do nosso lado.</h2>

            <p className="text-sm text-slate-400 mb-6">
              Recarregue a página. Se o problema persistir, fale com a gente pelo WhatsApp.
            </p>

            <button
              type="button"
              onClick={() => window.location.assign("/")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 cursor-pointer"
            >
              Voltar ao portal
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
