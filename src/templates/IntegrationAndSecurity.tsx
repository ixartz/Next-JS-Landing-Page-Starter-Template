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
      <img
        src="/assets/images/SyncapWorkflow.png"
        alt="Syncap workflow"
        className="aspect-ratio max-h-[284px]"
      />
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
      <div className="flex flex-col justify-between space-y-8 md:flex-row md:items-center">
        <div className="mb-4 flex w-full flex-col items-center text-center md:mb-0 md:w-1/4">
          <img
            src="/icons/encryption.svg"
            alt="End-to-end Encryption"
            className="mb-4 aspect-square w-[80px]"
          />
          <p className="mb-2 text-xl font-semibold text-black md:text-xl">
            End-to-end Encryption
          </p>
          <p>protects your data within a secure, private workplace</p>
        </div>
        <div className="mb-4 flex w-full flex-col items-center text-center md:mb-0 md:w-1/4">
          <img
            src="/icons/compliance.svg"
            alt="SOC 2 Compliance"
            className="mb-4 aspect-square w-[80px]"
          />
          <p className="mb-2 text-xl font-semibold text-black md:text-xl">
            SOC 2 Compliance
          </p>
          <p>
            ensures data security to safeguard your organization and clients’
            interests
          </p>
        </div>
        <div className="flex w-full flex-col items-center text-center md:w-1/4">
          <img
            src="/icons/access.svg"
            alt="Controlled Data Access"
            className="mb-4 aspect-square w-[80px]"
          />
          <p className="mb-2 text-xl font-semibold text-black md:text-xl">
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
