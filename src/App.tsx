import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import {
  CalendarCheck,
  AlertTriangle,
  Users,
  CheckSquare,
  FileText,
  Building,
  DollarSign,
  CreditCard,
  Receipt,
  Archive
} from 'lucide-react';

export function App() {
  const [stats] = useState({
    total: 47,
    completed: 23,
    inProgress: 16,
    urgent: 8
  });

  const quickLinks = [
    { name: 'Property', icon: Building, color: 'bg-blue-500', href: '#property' },
    { name: 'Payroll', icon: DollarSign, color: 'bg-green-500', href: '#payroll' },
    { name: 'Cardknox', icon: CreditCard, color: 'bg-purple-500', href: '#cardknox' },
    { name: 'Receipts JH', icon: Receipt, color: 'bg-orange-500', href: '#receipts-jh' },
    { name: 'Receipts OZ', icon: Archive, color: 'bg-teal-500', href: '#receipts-oz' }
  ];

  const taskSections = [
    {
      title: 'Tasks Assigned to Me',
      description: 'Tasks assigned by others or flagged for you',
      count: '5 assigned',
      badge: '1 new',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/tasks-assigned-to-me',
      priority: 1
    },
    {
      title: 'Today Tasks',
      description: 'Tasks due today requiring attention',
      count: '7 due today',
      badge: '2 overdue',
      icon: CalendarCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/todays-tasks',
      priority: 2
    },
    {
      title: 'My Daily Tasks',
      description: 'Personal tasks organized by category',
      count: '8 categories',
      badge: '15 active',
      icon: CheckSquare,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      href: '/daily-tasks',
      priority: 3
    },
    {
      title: 'Urgent Tasks',
      description: 'High-priority tasks needing immediate action',
      count: '3 urgent',
      badge: 'Action needed',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      href: '/urgent-tasks',
      priority: 4
    },
    {
      title: 'Checks Issued',
      description: 'Track and manage all issued checks',
      count: '12 today',
      badge: '3 pending',
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      href: '/checks-issued',
      priority: 5
    },
    {
      title: 'Team Members',
      description: 'Manage team of 6 and assign tasks',
      count: '6 members',
      badge: '4 busy',
      icon: Users,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      href: '/team-members',
      priority: 6
    }
  ];

  const sortedTaskSections = taskSections.sort((a, b) => a.priority - b.priority);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Hey Shirish Jadal!
              </h1>
              <p className="text-gray-600">
                Welcome back to your operational dashboard. Ready to tackle today's challenges?
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  className="h-20 flex-col gap-2 hover:scale-105 transition-transform duration-200"
                  onClick={() => window.open(link.href, '_blank')}
                >
                  <div className={`w-8 h-8 ${link.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium">{link.name}</span>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stats.total}</div>
                <div className="text-sm text-gray-600">Total Tasks</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">{stats.completed}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">{stats.inProgress}</div>
                <div className="text-sm text-gray-600">In Progress</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">{stats.urgent}</div>
                <div className="text-sm text-gray-600">Urgent</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTaskSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.title}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105"
                onClick={() => window.location.href = section.href}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 ${section.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                      {section.badge}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-gray-500">
                      {section.count}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600">
                    {section.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                  >
                    View details
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Shirish Jadal Operational Task Manager • Stay organized, stay productive</p>
        </div>
      </div>
    </div>
  );
}
