'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  SiDiscord,
  SiMailchimp,
  SiGrammarly,
  SiIntercom,
  SiSquare,
  SiDropbox,
} from 'react-icons/si'
import { useSearchParams, useRouter } from 'next/navigation'
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useAuthHook } from '@/hooks/AuthHook'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: hook up with your auth
    const email = emailRef.current?.value
    const password = passwordRef.current?.value
    console.log({ email, password })
  }

  const googleUrl = process.env.NEXT_PUBLIC_GOOGLE_URL ?? '';
  console.log('google',googleUrl)
  const gotoSignUp = () => router.push('/sign-up')

  const {authorizeGoogle} = useAuthHook()
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      (async() => {
        const res = await authorizeGoogle(code);
        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        router.replace('/sign-in');
      })()
    }
  }, [searchParams, router, authorizeGoogle]);

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT: form */}
      <div className="flex flex-col px-6 sm:px-10 lg:px-32 pt-5 pb-10 lg:py-10 gap-10 items-center">
        {/* Brand */}
        <div className="flex items-center gap-3 self-start">
          <div className="rounded-md bg-[#073D44] p-2">
            <div className="relative w-5 h-5">
              <Image
                src="/brandAvt-cropped.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold text-[#073D44]">BiStorage</h1>
        </div>
        {/* Card */}
        <div className="w-full max-w-md">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Welcome Back!</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to access your dashboard and continue optimizing your workflow.</p>

          <form onSubmit={handleSignIn} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <input
                  id="email"
                  ref={emailRef}
                  type="email"
                  placeholder="Enter your email"
                  className="peer w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pl-10 text-[15px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#073D44]/60 focus:border-[#073D44]"
                  required
                />
                <MdOutlineMail
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 peer-focus:text-[#073D44]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <button type="button" className="text-sm text-[#073D44] hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter your password"
                  className="peer w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pl-10 text-[15px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#073D44]/60 focus:border-[#073D44]"
                  required
                />
                <TbLockPassword
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 peer-focus:text-[#073D44]"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#073D44] text-white py-3.5 font-medium shadow-sm hover:opacity-95 transition"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-2 text-xs text-gray-500">OR</span></div>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onClick={() => router.push(googleUrl)} type="button" className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 text-gray-800 hover:bg-gray-50 cursor-pointer">
                <FcGoogle className="text-lg" /> Continue with Google
              </button>
              <button onClick={() => router.push('/auth/sign-in')} type="button" className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-3 text-gray-800 hover:bg-gray-50 cursor-pointer">
                <FaGithub className="text-xl" /> Continue with GitHub
              </button>
            </div>

            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <button type="button" onClick={gotoSignUp} className="text-[#073D44] font-medium hover:underline">Sign Up</button>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT: hero panel */}
      <div className="relative hidden lg:block overflow-hidden">
        {/* Solid base color */}
        <div className="absolute inset-0 bg-[#073D44]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                900px 600px at 80% 20%,
                rgba(255,255,255,0.35) 0%,      
                rgba(255,255,255,0.25) 10%,     
                rgba(255,255,255,0.05) 25%,      
                transparent 40%                 
              ),
              radial-gradient(
                800px 500px at 85% 75%,
                rgba(26,148,164,0.35),
                transparent 90%
              )
            `,
          }}
        />

        <div className="relative h-full flex flex-col justify-center px-14">
          <h2 className="text-white text-5xl leading-tight font-sans max-w-xl">Revolutionize storage with smarter automation</h2>
          <div className="mt-8 max-w-xl text-white/90">
            <div className="text-5xl leading-none">“</div>
            <p className="-mt-2 text-lg font-sans">
              BiStorage has completely transformed our workflow. It&apos;s reliable, efficient, and ensures our releases are always top‑notch.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/30" />
              <div className="text-sm text-white/80">
                <div className="font-medium text-white">Michael Carter</div>
                <div className="">Software Engineer at DevCore</div>
              </div>
            </div>
          </div>

          {/* Logos */}
          <div className="absolute bottom-8 left-14 right-14">
            <div className="text-xs uppercase tracking-widest text-white/60 mb-4">Join 1k teams</div>
            <div className="grid grid-cols-4 gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2"><SiDiscord className="text-lg" /><span className="hidden xl:inline">Discord</span></div>
              <div className="flex items-center gap-2"><SiMailchimp className="text-lg" /><span className="hidden xl:inline">Mailchimp</span></div>
              <div className="flex items-center gap-2"><SiGrammarly className="text-lg" /><span className="hidden xl:inline">Grammarly</span></div>
              <div className="flex items-center gap-2"><SiIntercom className="text-lg" /><span className="hidden xl:inline">Intercom</span></div>
              <div className="flex items-center gap-2"><SiSquare className="text-lg" /><span className="hidden xl:inline">Square</span></div>
              <div className="flex items-center gap-2"><SiDropbox className="text-lg" /><span className="hidden xl:inline">Dropbox</span></div>
              {/* placeholder to balance grid */}
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
