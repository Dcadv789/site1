'use client';

import { ArrowRight, BarChart2, Building2, Users2, PieChart, TrendingUp, Briefcase, LineChart, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10 px-4 py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Transformando Desafios em
              <span className="block text-blue-200">Oportunidades Financeiras</span>
            </h1>
            <p className="text-xl mb-12 text-blue-100">
              Expertise financeira que impulsiona o crescimento do seu negócio com soluções inovadoras e estratégias personalizadas.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Conheça Nossos Serviços <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Soluções Completas para seu Negócio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um conjunto abrangente de serviços financeiros para impulsionar 
              o crescimento e a eficiência da sua empresa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="w-10 h-10" />,
                title: "Análise Financeira Avançada",
                description: "Análise profunda de indicadores financeiros, projeções e planejamento estratégico para tomada de decisões."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Gestão de Riscos",
                description: "Identificação, avaliação e mitigação de riscos financeiros para proteger seu patrimônio e investimentos."
              },
              {
                icon: <Lightbulb className="w-10 h-10" />,
                title: "Consultoria Estratégica",
                description: "Desenvolvimento de estratégias personalizadas para maximizar resultados e alcançar objetivos de negócio."
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-32 gradient-bg text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-20">Nossos Serviços Especializados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <PieChart className="w-8 h-8" />,
                title: "Planejamento Financeiro",
                description: "Desenvolvimento de estratégias financeiras personalizadas, incluindo:",
                items: [
                  "Análise de fluxo de caixa",
                  "Projeções financeiras",
                  "Orçamento empresarial",
                  "Planejamento tributário"
                ]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Reestruturação Empresarial",
                description: "Soluções completas para otimização empresarial:",
                items: [
                  "Diagnóstico organizacional",
                  "Reestruturação de dívidas",
                  "Otimização de processos",
                  "Gestão de custos"
                ]
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Fusões e Aquisições",
                description: "Assessoria especializada em transações corporativas:",
                items: [
                  "Avaliação de empresas",
                  "Due diligence",
                  "Estruturação de operações",
                  "Negociações estratégicas"
                ]
              },
              {
                icon: <BarChart2 className="w-8 h-8" />,
                title: "Gestão de Investimentos",
                description: "Estratégias personalizadas de investimento:",
                items: [
                  "Análise de portfólio",
                  "Gestão de riscos",
                  "Diversificação estratégica",
                  "Monitoramento de performance"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">{service.icon}</div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="mb-4 text-blue-100">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-blue-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Pronto para Impulsionar seu Negócio?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa 
            a alcançar novos patamares de sucesso.
          </p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            Agende sua Consultoria <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}