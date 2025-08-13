'use client'

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ChatBox({newChat} : {newChat : boolean}) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" }
  ]);
  const [input, setInput] = useState("");
  useEffect(() => {
    setMessages([{ sender: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn?" }]);
  }, [newChat]);
  
  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [
      ...messages,
      { sender: "user", text: input }
    ];
    setMessages(newMessages);
    setInput("");
    // Giả lập bot phản hồi
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Bạn vừa nói: " + input }
      ]);
    }, 500);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Nội dung chat */}
        <div className="flex-grow overflow-y-auto p-4 space-y-3 pb-20">
        {messages.map((msg, i) => (
        <div
          key={i}
          className={`px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap break-words bubble-in
            ${msg.sender === 'user'
              ? 'w-fit max-w-[50%] bg-[#7DAFAF] text-white self-end ml-auto'
              : 'w-fit max-w-[80%] text-gray-800 self-start'
            }`}>
          {msg.sender === 'bot'
            ? (
              <span
                className="type-wipe"
                style={
                  {
                    '--steps': msg.text.length,        
                    '--dur': '0.8s',              
                  } as React.CSSProperties
                }
              >
                {msg.text}
              </span>
            )
            : msg.text}
        </div>

        ))}
        </div>

      {/* Input gửi tin nhắn */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-10 py-4 flex justify-center items-center">
            <div className="relative w-full">
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} spellCheck = {false}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
                placeholder="Ask something" className="w-full text-sm flex-grow p-2 border rounded-2xl outline-none bg-gray-200"/>
                <FaArrowCircleUp size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-[#7DAFAF]"></FaArrowCircleUp>
            </div>
        </div>
    </div>
  );
}
