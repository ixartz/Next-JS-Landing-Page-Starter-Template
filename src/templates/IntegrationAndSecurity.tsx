import { Section } from '../layout/Section';

const IntegrationAndSecurity = () => (
  <>
    <Section
      title={
        <>
          <p>Winning Workflow = Compounding Success</p>
        </>
      }
      description="SynCap AI seamlessly integrates with your current tools, amplifying your capabilities without disrupting your routine."
    >
      <></>
    </Section>
    <Section
      title={
        <>
          <p>Your Data, Secured and Sovereign</p>
        </>
      }
      description="SynCap AI seamlessly integrates with your current tools, amplifying your capabilities without disrupting your routine."
    >
      <div className="flex justify-between">
        <div className="flex w-1/4 flex-col items-center text-center">
          <img
            src="/icons/encryption.svg"
            alt="End-to-end Encryption"
            className="aspect-square w-1/3 pb-4"
          />
          <p className="mb-2 text-xl font-semibold text-black">
            End-to-end Encryption
          </p>
          <p>protects your data within a secure, private workplace</p>
        </div>
        <div className="flex w-1/4 flex-col items-center text-center">
          <img
            src="/icons/compliance.svg"
            alt="SOC 2 Compliance"
            className="aspect-square w-1/3 pb-4"
          />
          <p className="mb-2 text-xl font-semibold text-black">
            SOC 2 Compliance
          </p>
          <p>
            ensures data security to safeguard your organization and clients’
            interests
          </p>
        </div>
        <div className="flex w-1/4 flex-col items-center text-center">
          <img
            src="/icons/access.svg"
            alt="Controlled Data Access"
            className="aspect-square w-1/3 pb-4"
          />
          <p className="mb-2 text-xl font-semibold text-black">
            Controlled Data Access
          </p>
          <p>
            restricts sensitive information access to authorized team members
            only
          </p>
        </div>
      </div>
      <></>
    </Section>
  </>
);

export { IntegrationAndSecurity };
