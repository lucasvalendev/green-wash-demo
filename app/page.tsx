'use client'

import { useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '5512992028120'
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Green+Wash+Est%C3%A9tica+Automotiva+%26+Higieniza%C3%A7%C3%A3o+em+Geral+Taubat%C3%A9'

type Step = 1 | 2 | 3 | 4

type Quote = {
  service: string
  vehicleType: string
  model: string
  situation: string
  timing: string
  notes: string
}

const services = [
  {
    title: 'Higienização de bancos e interior',
    description: 'Bancos, teto, carpetes e outras superfícies internas.',
  },
  {
    title: 'Lavagem e enceramento',
    description: 'Cuidado de limpeza e acabamento para o dia a dia.',
  },
  {
    title: 'Polimento e faróis',
    description: 'Polimento automotivo e recuperação do acabamento dos faróis.',
  },
  {
    title: 'Limpeza de motor',
    description: 'Limpeza dedicada para a área do motor.',
  },
  {
    title: 'Estofados e carpetes',
    description: 'Higienização de sofás, cadeiras, tapetes e carpetes.',
  },
  {
    title: 'Lavagem e enceramento de motos',
    description: 'Cuidado também para motos, com lavagem e acabamento.',
  },
]

const vehicleTypes = ['Hatch', 'Sedan', 'SUV', 'Picape', 'Moto', 'Outro']
const situations = [
  'Manchas / sujeira pesada',
  'Odor',
  'Pelos de animais',
  'Manutenção',
  'Quero recuperar o brilho',
  'Outro',
]
const timings = ['Hoje / assim que possível', 'Esta semana', 'Nos próximos dias', 'Só quero consultar']

function Arrow({ direction = 'right' }: { direction?: 'right' | 'down' | 'left' }) {
  const glyph = direction === 'down' ? '↓' : direction === 'left' ? '←' : '↗'
  return <span aria-hidden="true">{glyph}</span>
}

function scrollToQuote() {
  document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Home() {
  const [step, setStep] = useState<Step>(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const [quote, setQuote] = useState<Quote>({
    service: '',
    vehicleType: '',
    model: '',
    situation: '',
    timing: '',
    notes: '',
  })

  const message = useMemo(() => {
    const lines = [
      'Olá! Vim pela página da Green Wash e gostaria de pedir um orçamento.',
      '',
      'Serviço: ' + (quote.service || 'A definir'),
      'Veículo: ' + ([quote.vehicleType, quote.model].filter(Boolean).join(' — ') || 'A definir'),
      'Situação: ' + (quote.situation || 'Não informado'),
      'Quando pretende fazer: ' + (quote.timing || 'A combinar'),
    ]

    if (quote.notes.trim()) lines.push('Observação: ' + quote.notes.trim())
    lines.push('', 'Pode me passar valor e disponibilidade?')
    return lines.join('\n')
  }, [quote])

  const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)

  const chooseService = (service: string) => {
    setQuote((current) => ({ ...current, service }))
    setStep(2)
  }

  const chooseTiming = (timing: string) => {
    setQuote((current) => ({ ...current, timing }))
  }

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Green Wash — início">
          <span>GREEN</span>
          <strong>WASH</strong>
        </a>

        <nav id="mobile-navigation" className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
            Como funciona
          </a>
          <a href="#localizacao" onClick={() => setMenuOpen(false)}>
            Localização
          </a>
        </nav>

        <button className="header-cta" onClick={scrollToQuote}>
          Pedir orçamento <Arrow />
        </button>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
      </header>

      <div id="conteudo">
        <section className="hero" id="top">
          <div className="hero-main">
            <p className="eyebrow">
              <span className="status-dot" /> Estética automotiva em Taubaté
            </p>
            <h1>
              Seu carro bem cuidado.
              <span>Sem enrolação para pedir orçamento.</span>
            </h1>
            <p className="hero-copy">
              Higienização, polimento e cuidados automotivos no Jardim Ana Rosa. Escolha o serviço,
              informe seu veículo e fale direto com a Green Wash pelo WhatsApp.
            </p>
            <div className="hero-actions">
              <button className="button button-accent" onClick={scrollToQuote}>
                Montar meu orçamento <Arrow />
              </button>
              <a className="text-link" href="#servicos">
                Ver serviços <Arrow direction="down" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="Informações da Green Wash">
            <div className="proof-score">
              <span>08–18</span>
              <div>
                <strong>SEG — SÁB</strong>
                <p>Atendimento em Taubaté</p>
              </div>
            </div>
            <div className="proof-divider" />
            <div className="proof-detail">
              <span>Atendimento</span>
              <strong>Segunda a sábado</strong>
              <p>08:00 — 18:00</p>
            </div>
            <div className="proof-detail">
              <span>Endereço</span>
              <strong>Jardim Ana Rosa</strong>
              <p>Rua Luiz Vaz de Camões, 305</p>
            </div>
            <a className="proof-link" href={MAPS_URL} target="_blank" rel="noreferrer">
              Ver no Google Maps <Arrow />
            </a>
          </aside>
        </section>

        <section className="services section" id="servicos">
          <div className="section-heading">
            <p className="section-label">Serviços</p>
            <h2>Do interior ao acabamento.</h2>
            <p>
              A Green Wash trabalha com cuidados automotivos e higienização em geral. Aqui estão os
              serviços que o cliente já pode selecionar antes de chamar no WhatsApp.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <button
                className="service-card"
                key={service.title}
                onClick={() => {
                  setQuote((current) => ({ ...current, service: service.title }))
                  setStep(2)
                  scrollToQuote()
                }}
              >
                <span className="service-number">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <Arrow />
              </button>
            ))}
          </div>
        </section>

        <section className="process section" id="como-funciona">
          <div className="process-copy">
            <p className="section-label">Orçamento direto</p>
            <h2>Você explica uma vez. A conversa já começa com contexto.</h2>
            <p>
              Em vez de mandar apenas “quanto custa?”, você informa o serviço, o veículo e quando
              pretende fazer. A Green Wash recebe tudo organizado no WhatsApp.
            </p>
          </div>

          <div className="process-steps" aria-label="Etapas do orçamento">
            <div>
              <span>01</span>
              <strong>Escolha o serviço</strong>
              <p>Selecione o cuidado que você procura.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Informe o veículo</strong>
              <p>Tipo, marca e modelo ajudam a contextualizar o orçamento.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Continue no WhatsApp</strong>
              <p>A mensagem chega pronta para combinar valor e disponibilidade.</p>
            </div>
          </div>
        </section>

        <section className="quote-section section" id="orcamento">
          <div className="quote-intro">
            <p className="section-label">Orçamento rápido</p>
            <h2>Menos troca de mensagem. Mais contexto desde o primeiro contato.</h2>
            <p>
              Leva menos de um minuto e não exige cadastro. No fim, você fala direto com a Green
              Wash pelo WhatsApp.
            </p>
            <div className="quote-meta">
              <span className="status-dot" /> Sem cadastro · sem formulário enviado para terceiros
            </div>
          </div>

          <div className="wizard" aria-live="polite">
            <div className="wizard-topline">
              <span>ORÇAMENTO GREEN WASH</span>
              <span>{step === 4 ? 'RESUMO' : '0' + step + ' / 03'}</span>
            </div>
            {step < 4 && (
              <div className="progress" aria-hidden="true">
                <span style={{ width: String((step / 3) * 100) + '%' }} />
              </div>
            )}

            {step === 1 && (
              <div className="wizard-step">
                <p className="step-label">PASSO 01</p>
                <h3>O que você precisa?</h3>
                <div className="choice-grid">
                  {[...services.map((service) => service.title), 'Outro / não sei ainda'].map((service) => (
                    <button className="choice" key={service} onClick={() => chooseService(service)}>
                      <span>{service}</span>
                      <Arrow />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="wizard-step">
                <button className="back-button" onClick={() => setStep(1)}>
                  <Arrow direction="left" /> Voltar
                </button>
                <p className="step-label">PASSO 02</p>
                <h3>Qual é o seu veículo?</h3>
                <div className="choice-grid compact">
                  {vehicleTypes.map((type) => (
                    <button
                      className={quote.vehicleType === type ? 'choice selected' : 'choice'}
                      key={type}
                      onClick={() => setQuote((current) => ({ ...current, vehicleType: type }))}
                    >
                      <span>{type}</span>
                      <span aria-hidden="true">{quote.vehicleType === type ? '✓' : '↗'}</span>
                    </button>
                  ))}
                </div>
                <label className="field-label" htmlFor="model">
                  Marca e modelo <span>opcional</span>
                </label>
                <input
                  className="text-input"
                  id="model"
                  value={quote.model}
                  onChange={(event) =>
                    setQuote((current) => ({ ...current, model: event.target.value }))
                  }
                  placeholder="Ex.: Honda Civic"
                />
                <button
                  className="button button-accent wizard-next"
                  disabled={!quote.vehicleType}
                  onClick={() => setStep(3)}
                >
                  Continuar <Arrow />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="wizard-step">
                <button className="back-button" onClick={() => setStep(2)}>
                  <Arrow direction="left" /> Voltar
                </button>
                <p className="step-label">PASSO 03</p>
                <h3>Como podemos contextualizar melhor?</h3>

                <div className="field-block">
                  <span className="field-label">Situação <span>opcional</span></span>
                  <div className="tag-grid">
                    {situations.map((situation) => (
                      <button
                        className={quote.situation === situation ? 'tag selected' : 'tag'}
                        key={situation}
                        onClick={() => setQuote((current) => ({ ...current, situation }))}
                      >
                        {situation}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field-block">
                  <span className="field-label">Quando pretende fazer?</span>
                  <div className="choice-grid compact timing-grid">
                    {timings.map((timing) => (
                      <button
                        className={quote.timing === timing ? 'choice selected' : 'choice'}
                        key={timing}
                        onClick={() => chooseTiming(timing)}
                      >
                        <span>{timing}</span>
                        <span aria-hidden="true">{quote.timing === timing ? '✓' : '↗'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="field-label" htmlFor="notes">
                  Observação <span>opcional</span>
                </label>
                <textarea
                  className="text-input textarea"
                  id="notes"
                  value={quote.notes}
                  onChange={(event) =>
                    setQuote((current) => ({ ...current, notes: event.target.value }))
                  }
                  placeholder="Ex.: banco com mancha, farol amarelado, carro ficou muito tempo parado..."
                />

                <button
                  className="button button-accent wizard-next"
                  disabled={!quote.timing}
                  onClick={() => setStep(4)}
                >
                  Ver resumo <Arrow />
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="wizard-step summary-step">
                <button className="back-button" onClick={() => setStep(3)}>
                  <Arrow direction="left" /> Voltar
                </button>
                <p className="step-label">SEU RESUMO</p>
                <h3>Pronto. Agora é só enviar.</h3>
                <dl className="summary-list">
                  <div>
                    <dt>Serviço</dt>
                    <dd>{quote.service}</dd>
                  </div>
                  <div>
                    <dt>Veículo</dt>
                    <dd>{[quote.vehicleType, quote.model].filter(Boolean).join(' — ')}</dd>
                  </div>
                  <div>
                    <dt>Situação</dt>
                    <dd>{quote.situation || 'Não informado'}</dd>
                  </div>
                  <div>
                    <dt>Quando</dt>
                    <dd>{quote.timing}</dd>
                  </div>
                </dl>
                <a className="button button-accent whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Continuar no WhatsApp <Arrow />
                </a>
                <p className="wizard-note">A mensagem abre pronta no WhatsApp da Green Wash.</p>
              </div>
            )}
          </div>
        </section>

        <section className="location section" id="localizacao">
          <div>
            <p className="section-label">Onde estamos</p>
            <h2>Jardim Ana Rosa, Taubaté.</h2>
            <p className="location-address">
              Rua Luiz Vaz de Camões, 305
              <br />
              Taubaté — SP, 12071-050
            </p>
            <a className="button button-dark" href={MAPS_URL} target="_blank" rel="noreferrer">
              Abrir no Google Maps <Arrow />
            </a>
          </div>

          <div className="location-panel">
            <div>
              <span>Horário</span>
              <strong>Segunda a sábado</strong>
              <p>08:00 — 18:00</p>
            </div>
            <div>
              <span>WhatsApp</span>
              <strong>(12) 99202-8120</strong>
              <a href="https://wa.me/5512992028120" target="_blank" rel="noreferrer">
                Chamar agora <Arrow />
              </a>
            </div>
            <div>
              <span>Atuação</span>
              <strong>Estética automotiva</strong>
              <p>Higienização em geral</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <a className="wordmark footer-wordmark" href="#top" aria-label="Green Wash — voltar ao início">
          <span>GREEN</span>
          <strong>WASH</strong>
        </a>
        <p>Estética automotiva & higienização em geral · Taubaté/SP</p>
        <a href="https://wa.me/5512992028120" target="_blank" rel="noreferrer">
          WhatsApp <Arrow />
        </a>
        <small>© 2026 Green Wash</small>
      </footer>

      <button className="mobile-sticky-cta" onClick={scrollToQuote}>
        Pedir orçamento <Arrow />
      </button>
    </main>
  )
}
