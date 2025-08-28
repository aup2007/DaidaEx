import RequestForm from '@/components/RequestForms'

export default function Request(){
  return (
    <section className="container py-10">
      <h2 className="text-2xl font-semibold">Tell us what you need</h2>
      <p className="text-gray-600">We’ll find the best vendors for your project.</p>
      <div className="mt-6">
        <RequestForm />
      </div>
    </section>
  )
}
